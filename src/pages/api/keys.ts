import { NextApiRequest, NextApiResponse } from "next";
import math from "../../utils/math";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  switch (method) {
    case `POST`:
      let keysize = req.body?.keysize ?? JSON.parse(req.body)["keysize"];

      try {
        return res.status(200).json({
          success: true,
          data: math.generate(keysize),
        });
      } catch (error) {
        return res.status(400).json({
          message: `Invald key size. ${error}`,
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
