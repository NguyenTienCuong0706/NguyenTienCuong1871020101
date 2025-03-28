$(document).ready(function () {
    const apiUrl = "http://localhost:3000/pets"; // API giả lập

    // Lấy danh sách thú cưng
    function fetchPets() {
        $.get(apiUrl, function (data) {
            let petCards = "";
            data.forEach((pet) => {
                petCards += `
                    <div class="col-md-4">
                        <div class="card">
                            <img src="${pet.image}" class="card-img-top" alt="${pet.name}">
                            <div class="card-body">
                                <h5 class="card-title">${pet.name}</h5>
                                <p class="card-text">Loại: ${pet.type}</p>
                                <p class="card-text"><strong>Giá:</strong> ${pet.price.toLocaleString()}đ</p>
                                <button class="btn btn-primary">Mua ngay</button>
                                <button class="btn btn-success" onclick='addToCart(${JSON.stringify(pet)})'>Thêm vào giỏ</button>
                            </div>
                        </div>
                    </div>
                `;
            });
            $(".row").html(petCards);
        });
    }

    // Thêm vào giỏ hàng
    window.addToCart = function (pet) {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        cart.push(pet);
        localStorage.setItem("cart", JSON.stringify(cart));
        alert(`${pet.name} đã được thêm vào giỏ!`);
    };

    fetchPets();
});


$(document).ready(function () {
    function loadPets() {
        let pets = [
            { id: 1, name: "Chó Husky", type: "chó", price: 8650000, img: "cho1.jpg" },
            { id: 2, name: "Mèo Tai Cụp", type: "mèo", price: 6990000, img: "meo1.jpg" },
            { id: 3, name: "Chó Kiềng", type: "chó", price: 10500000, img: "cho2.jpg" },
            { id: 4, name: "Mèo Cam", type: "mèo", price: 99999, img: "meo5.jpg" },
            { id: 5, name: "Chó Chihuahua ", type: "chó", price: 10990000, img: "cho3.jpg" },
            { id: 6, name: "Mèo Manul", type: "mèo", price: 1000000, img: "meo3.jpg" }
        ];

        displayPets(pets);

        // Hiển thị thanh tìm kiếm khi nhấn nút
        $("#search-btn").click(function () {
            $("#search-container").toggleClass("d-none");
        });

        // Xử lý tìm kiếm
        $("#search-input").on("input", function () {
            let keyword = $(this).val().trim().toLowerCase();
            let filteredPets = pets.filter(pet => pet.type.includes(keyword));
            displayPets(filteredPets);
        });
    }

    function displayPets(pets) {
        let html = "";
        pets.forEach(pet => {
            html += `
                <div class="col-md-4">
                    <div class="card">
                        <img src="${pet.img}" class="card-img-top" alt="${pet.name}">
                        <div class="card-body">
                            <h5 class="card-title">${pet.name}</h5>
                            <p class="card-text"><strong>Loại:</strong> ${pet.type}</p>
                            <p class="card-text"><strong>Giá:</strong> ${pet.price.toLocaleString()}đ</p>
                        </div>
                    </div>
                </div>
            `;
        });
        $("#pet-list").html(html);
    }

    loadPets();
});

$(document).ready(function () {
    // Ẩn ảnh sau 3 giây
    setTimeout(function () {
        $("#welcome-screen").fadeOut();
    }, 3000);

    // Hoặc ẩn khi người dùng nhấn vào ảnh
    $("#welcome-screen").click(function () {
        $(this).fadeOut();
    });
});
