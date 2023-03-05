const Checkout = ({ quantity }) => {

    const handleCheckout = async () => {
        if(quantity>0){
            try {
                let data = await fetch("http://localhost:5000/checkout-session", {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                      items: [
                        { id: 1, quantity: quantity },
                      ],
                    }),
                })
                const { url } = await data.json();
                window.location = url;
            } catch (error) {
                console.log(error)
            }
        }
    }

    return (
        <div>
            <button type="button" onClick={handleCheckout}>
                Checkout
            </button>
        </div>
    )
}

export default Checkout;