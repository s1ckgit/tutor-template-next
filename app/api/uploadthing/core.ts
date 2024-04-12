import { createUploadthing, type FileRouter } from "uploadthing/next";
 
const f = createUploadthing();
 
export const ourFileRouter = {
  photoUploader: f({ image: {
      maxFileSize: '4MB',
      maxFileCount: 1,
    }
  })
    .onUploadComplete(async ({ file }) => {
      return { photo: file.url };
    })
} satisfies FileRouter;
 
export type OurFileRouter = typeof ourFileRouter;
