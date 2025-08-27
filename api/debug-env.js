export default function handler(req, res) {
  const v = process.env.NOWPAY_API_KEY || "";
  // on ne renvoie pas la clé, juste des infos
  res.status(200).json({
    hasKey: !!v,
    length: v.length,
    preview: v ? `${v.slice(0,4)}...${v.slice(-4)}` : null
  });
}
