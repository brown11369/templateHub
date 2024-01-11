// types.ts
export interface Template {
    _id?:string;
    user_id: string;
    template_name: string;
    main_image: string;
    stacks: string[];
    template_url: string;
    description: string;
    images: string[];
}
