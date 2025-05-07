import './MainContent.css'

export default function MainContent() {
    return (
        <section className='main-container'>
         <h1  className='main-title'>اختر نوع البلاغ</h1>   
        <section className="categories">
            <section className="category">
                <div class="category-icon">
                <img src='/assets/images/search.png' />
                </div>
                <h1>قسم<br />المفقودات</h1>
            </section>
            <section className="category">
            <div class="category-icon">
            <img src='/assets/images/location.png' />
            </div>
            <h1>قسم<br />الموجودات</h1>
            </section>

        </section>
        </section>
    )




}