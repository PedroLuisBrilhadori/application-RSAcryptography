import { NextApiRequest, NextApiResponse } from "next";
import math from "../../utils/math";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  switch (method) {
    case `POST`:
      const message = req.body?.message ?? JSON.parse(req.body).message;
      const privateKey =
        req.body?.privateKey ?? JSON.parse(req.body).privateKey;

      try {
        const descrypted_message = math.decrypt(
          message,
          privateKey?.toString()
        );
        const decoded_message = math.decode(descrypted_message);

        return res.status(200).json({
          success: true,
          data: {
            message: decoded_message,
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
