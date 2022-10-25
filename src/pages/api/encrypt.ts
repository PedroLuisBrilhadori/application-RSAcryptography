import { NextApiRequest, NextApiResponse } from "next";
import math from "../../utils/math";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  const { message, publicKey } = JSON.parse(req.body);

  switch (method) {
    case `POST`:
      try {
        const encoded_message = math.encode(message);
        const encrypted_message = math.encrypt(encoded_message, publicKey);

        res.status(200).json({
          success: true,
          data: {
            message: encrypted_message,
          },
        });
      } catch (error) {
        res.status(400).json({
          message: `Error: ${error}`,
          success: false,
        });
      }

    default:
      res.status(405).json({
        message: `method ${method} not allowed.`,
        success: false,
      });
  }
}
