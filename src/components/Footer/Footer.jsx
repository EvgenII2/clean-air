import './Footer.css';

function Footer(props) {
    return (
        <div className='footer'>
            <p className='footer__text'>Все права защищены. ПКФ "ПРОМТРАНСКОМПЛЕКТ" &#169; {new Date().getFullYear()}.</p>
        </div>
    )
}

export default Footer;