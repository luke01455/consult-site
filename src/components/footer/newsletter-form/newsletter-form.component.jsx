import React from 'react';
import './newsletter-form.styles.scss';

const NewsetterForm = () => {
    return (
        <div className='newsletter-form-container'>
            <form>
                <div className="input">
                    <input type="text" className="email" name="email" placeholder="NAME@EXAMPLE.COM" />
                    <input type="submit" className="submit" value="SIGN UP" />
                </div>
            </form>
        </div>

    )
}
export default NewsetterForm;