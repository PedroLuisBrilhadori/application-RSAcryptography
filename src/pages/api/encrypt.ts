import { NextApiRequest, NextApiResponse } from "next";
import math from "../../utils/math";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  switch (method) {
    case `POST`:
      const message = req.body?.message ?? JSON.parse(req.body).message;
      const publicKey = req.body?.publicKey ?? JSON.parse(req.body).publicKey;

      try {
        const encoded_message = math.encode(message);
        const encrypted_message = math.encrypt(encoded_message, publicKey);

        return res.status(200).json({
          success: true,
          data: {
            message: encrypted_message,
          },
        });
      } catch (error) {
        return res.status(400).json({
          message: `Error: ${error}`,
          success: false,
        });
      }

    default:
      return res.status(405).json({
        message: `method ${method} not allowed.`,
        success: false,
      });
  }
}
