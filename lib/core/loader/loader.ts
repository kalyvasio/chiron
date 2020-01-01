var appDir = process.cwd();

export class Loader {
    public loadFiles(files: string[]) {
        files.forEach(x => import(appDir + "/dist" + x));
    }
}