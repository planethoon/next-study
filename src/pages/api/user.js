import { userDetail } from "pages/constants/userDetail";

export default function handler(req, res) {
  res.status(200).json(userDetail);
}
