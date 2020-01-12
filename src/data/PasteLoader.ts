import Datastore from "nedb";
import {PasteConfig} from "./PasteConfig";

export default class PasteLoader {

    private static idCharSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    private config: PasteConfig;
    private dataStore: Datastore = new Datastore<any>({filename: "./storage/storage.db", autoload: true});

    constructor(config: PasteConfig) {
        this.config = config;
    }

    public loadPaste(id: string): Promise<IPaste> {
        return new Promise<IPaste>((resolve, reject) => {
            this.dataStore.findOne({id}, (err, document) => {
                if (!document) {
                    return reject("NOT_FOUND");
                }
                resolve(document);
            });
        });
    }

    public createPaste(content: string, secret?: string): Promise<IPaste> {
        return new Promise<IPaste>((resolve, reject) => {
            this.generateId().then((value) => {
                this.dataStore.insert({
                    content,
                    id: value,
                    secret,
                }, (err, document) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(document);
                    }
                });
            }).catch(reject);
        });
    }

    private generateId(): Promise<string> {
        return new Promise<string>((resolve, reject) => {
            const id = this.randomString(this.config.keyLength);
            // TODO: duplicate check
            resolve(id);
        });
    }

    private randomString(length: number): string {
        let result = "";
        for (let i = 0; i < length; i++) {
            result += PasteLoader.idCharSet.charAt(Math.floor(Math.random() * PasteLoader.idCharSet.length));
        }
        return result;
    }

}

export interface IPaste {
    id: string;
    secret: string;
    content: string;
}
