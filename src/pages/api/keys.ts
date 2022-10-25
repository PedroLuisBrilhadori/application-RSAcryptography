import { NextApiRequest, NextApiResponse } from "next";
import math from "../../utils/math";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const {
    method,
    body: { keysize },
  } = req;

  switch (method) {
    case `POST`:
      try {
        res.status(200).json({
          success: true,
          data: math.generate(keysize),
        });
      } catch (error) {
        res.status(400).json({
          message: `Invald key size.`,
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
