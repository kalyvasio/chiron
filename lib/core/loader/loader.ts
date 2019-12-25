export class Loader {
    public loadFiles(files: string[]) {
        files.forEach(x => import(x));
    }
}