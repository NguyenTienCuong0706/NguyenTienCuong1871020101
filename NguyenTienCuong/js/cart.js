$(document).ready(function () {
    loadCart();

    function loadCart() {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        let cartHTML = "";
        let totalPrice = 0;

        if (cart.length === 0) {
            cartHTML = "<tr><td colspan='4' class='text-center'>Giỏ hàng trống</td></tr>";
        } else {
            cart.forEach((item, index) => {
                totalPrice += item.price;
                cartHTML += `
                    <tr>
                        <td>${item.name}</td>
                        <td>${item.type}</td>
                        <td>${item.price.toLocaleString()}đ</td>
                        <td>
                            <button class="btn btn-danger btn-sm" onclick="removeFromCart(${index})">Xóa</button>
                        </td>
                    </tr>
                `;
            });
        }

        $("#cart-list").html(cartHTML);
        $("#total-price").text(totalPrice.toLocaleString());
    }

    // Xóa một mục khỏi giỏ hàng
    window.removeFromCart = function (index) {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        cart.splice(index, 1);
        localStorage.setItem("cart", JSON.stringify(cart));
        loadCart();
    };

    // Xóa toàn bộ giỏ hàng
    window.clearCart = function () {
        localStorage.removeItem("cart");
        loadCart();
    };

    // Thanh toán (demo)
    window.checkout = function () {
        if (confirm("Bạn có chắc chắn muốn thanh toán?")) {
            alert("Thanh toán thành công! Cảm ơn bạn đã mua hàng 🐶🐱");
            clearCart();
        }
    };
});
