export class Bucket_List {
    constructor (
        public title: string = "",
        public description: string = "",
        public creator: number,
        public friend: number,
        public status: boolean = false
    ) {}
}
