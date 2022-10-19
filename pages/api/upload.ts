import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";


const upload = async (req: NextApiRequest, res: NextApiResponse) => {
    const { name, upload } = req.body;
    const prisma = new PrismaClient();
    try {
        const result = await prisma.upload.create({
            data: {
                name,
                upload
            }
        });

        res.status(200).json(result);

    } catch (err) {
        console.log(err);
        res.json(err);
    }


}

export default upload;