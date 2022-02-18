const createFooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML = `
        <div class="footer-content">
            <img src="./images/light-logo.png" alt="" class="logo">
            <div class="footer-ul-container">
                <ul class="category">
                    <li class="category-title">men</li>
                    <li><a href="" class="footer-link">t-shirts</a></li>
                    <li><a href="" class="footer-link">sweatshirts</a></li>
                    <li><a href="" class="footer-link">shirts</a></li>
                    <li><a href="" class="footer-link">jeans</a></li>
                    <li><a href="" class="footer-link">trousers</a></li>
                    <li><a href="" class="footer-link">shoes</a></li>
                    <li><a href="" class="footer-link">casuals</a></li>
                    <li><a href="" class="footer-link">formals</a></li>
                    <li><a href="" class="footer-link">sports</a></li>
                    <li><a href="" class="footer-link">watch</a></li>
                </ul>
                <ul class="category">
                    <li class="category-title">women</li>
                    <li><a href="" class="footer-link">t-shirts</a></li>
                    <li><a href="" class="footer-link">sweatshirts</a></li>
                    <li><a href="" class="footer-link">shirts</a></li>
                    <li><a href="" class="footer-link">jeans</a></li>
                    <li><a href="" class="footer-link">trousers</a></li>
                    <li><a href="" class="footer-link">shoes</a></li>
                    <li><a href="" class="footer-link">casuals</a></li>
                    <li><a href="" class="footer-link">formals</a></li>
                    <li><a href="" class="footer-link">sports</a></li>
                    <li><a href="" class="footer-link">watch</a></li>
                </ul>
            </div>
        </div>
        <p class="footer-title">about company</p>
        <p class="info">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim, vitae est maiores libero assumenda amet velit rerum cupiditate voluptates eligendi beatae aspernatur debitis porro omnis obcaecati laudantium voluptate! Accusantium sunt, voluptas, iste facere sed sapiente eius fuga, beatae deserunt obcaecati corrupti aut? Voluptatibus eum deleniti doloribus exercitationem in officiis magnam similique provident quam assumenda illum perferendis earum fugiat, dolorem impedit quia reiciendis porro id nemo quidem rerum minima saepe beatae aperiam? Similique illum facere molestias laboriosam suscipit quae consequuntur illo, doloremque natus reiciendis? Ab tenetur, id, hic sapiente distinctio ratione impedit nisi voluptate eveniet similique, laudantium aliquid iste fugit quos optio fuga temporibus? Voluptates aperiam eos suscipit, quaerat recusandae alias impedit natus sint cumque fugit. Doloribus impedit numquam placeat, labore deserunt neque delectus eaque tempora iure, adipisci optio vitae iste. Illo neque facilis quos? Aut quo totam harum doloribus eum quia recusandae maxime. Maxime unde possimus delectus vero enim repellendus?</p>
        <p class="info">support emails - help@clothing.com, customersupport@clothing.com</p>
        <p class="info">telephone - 180 00 00 001, 180 00 00 002</p>
        <div class="footer-social-container">
            <div>
                <a href="" class="social-link">terms & services</a>
                <a href="" class="social-link">privacy page</a>
            </div>
            <div>
                <a href="" class="social-link">instagram</a>
                <a href="" class="social-link">facebook</a>
                <a href="" class="social-link">twitter</a>
            </div>
        </div>
        <p class="footer-credit">Clothing, Best apparels online store</p>
    `;
}

createFooter();