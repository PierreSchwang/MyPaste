import * as shelljs from 'shelljs';
shelljs.cp('-R', 'src/views', 'dist/');
shelljs.cp('-R', 'src/public', 'dist/');
