

import './Welcome.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Welcome() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        fullName: '',
        universityEmail: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add form validation and submission logic here
        navigate('/home');
    };

    return (
        <div className='welcome-container'>
            <div className='welcome-content'>
                <div className='welcome-left'>
                    <div className='illustration'>
                        <img src='/assets/images/welcome.png' />
                    </div>
                </div>
                
                <div className='welcome-right'>
                    <h1 className='welcome-title'>مرحباً بك!</h1>
                    <p className='welcome-subtitle'>
                        منصة تسهل العثور على المفقودات والمساعدة في إرجاعها لأصحابها بطريقة آمنة وسريعة
                    </p>
                    
                    <form onSubmit={handleSubmit} className='welcome-form'>
                        <input
                            type='text'
                            name='fullName'
                            placeholder='الاسم الكامل'
                            value={formData.fullName}
                            onChange={handleChange}
                            className='form-input'
                        />
                        <input
                            type='email'
                            name='universityEmail'
                            placeholder='الايميل الجامعي'
                            value={formData.universityEmail}
                            onChange={handleChange}
                            className='form-input'
                        />
                        <input
                            type='password'
                            name='password'
                            placeholder='الرقم السري'
                            value={formData.password}
                            onChange={handleChange}
                            className='form-input'
                        />
                        <input
                            type='password'
                            name='confirmPassword'
                            placeholder='تكرار الرقم السري'
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            className='form-input'
                        />
                        <button type='submit' className='submit-button'>
                            سجل دخول
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}