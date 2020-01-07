import {PathLike} from "fs";
import * as fs from 'fs';

export class FileLoader {

    public loadJsonObject(path: PathLike): any {
        if(!this.exists(path))
            return null;
        return JSON.parse(fs.readFileSync(path).toString());
    }

    public write(path: PathLike, data: string): void {
        fs.writeFileSync(path, data);
    }

    public mkdir(path: PathLike): void {
        fs.mkdirSync(path);
    }

    public exists(path: PathLike): boolean {
        return fs.existsSync(path);
    }

}
