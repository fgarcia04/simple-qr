export class Registry {

    private format: string;
    private text: string;
    private type: string;
    private icon: string;
    private created: Date;

    constructor(format: string, text: string) {

        this.format = format;
        this.text = text;
        this.created = new Date();
        this.getType();

    }

    private getType() {
        const type = this.text.substr(0, 4);
        console.log(type);
        switch (type) {
            case 'http':
                this.type = 'http';
                this.icon = 'globe';
                break;
            case 'geo:':
                this.type = 'geo';
                this.icon = 'pin';
                break;
            default:
                this.type = 'Non';
                this.icon = 'create'

        }
    }

}