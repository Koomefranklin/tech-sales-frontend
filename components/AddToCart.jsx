export default function AddToCart ({
  product,
  user,
  quantity,
}) {
  const token = JSON.parse(sessionStorage.getItem('user_token')).key;
  const api = process.env.NEXT_PUBLIC_API_SERVER;
  const data = ({
    user: user,
    product: product,
    quantity: quantity
  });
  fetch(`${api}/add-cart/`, {
    method: 'POST',
    headers: {
      'Content-Type': "application/json",
      Accept: "application/json",
      Authorization: `Token ${token}`,
    },
    body: JSON.stringify(data),
  }).then((res) => {
    if(res.ok) {
      res.json().then(() => {
        console.log(res);
      });
    }
  }).catch(() => {
    console.log("Item exist")
      res.json().catch(() => {
        console.log(res);
      })
  });
}