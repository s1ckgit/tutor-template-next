import { ObjectId } from "mongoose";
import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface VideoCardProps extends DetailedHTMLProps<HTMLAttributes<HTMLIFrameElement>, HTMLIFrameElement> {
    src: string,
    name: string,
    age: number,
    text: string,
    _id?: string | ObjectId,
}
