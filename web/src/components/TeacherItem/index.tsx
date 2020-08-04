import React from 'react'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'
import './styles.css'
// interface TeacherItemPro

function  TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://media-exp1.licdn.com/dms/image/C4E03AQHICeMgzBma-Q/profile-displayphoto-shrink_200_200/0?e=1602115200&v=beta&t=VHg6ZKSxxpny3MCdp6E5X61HskRMCh9cQJ2-T3_yUNk" alt="Lucas Carvalho"/>
                <div>
                    <strong>Lucas Cavalho</strong>
                    <span>C# Programming</span>
                </div>
            </header>

            <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                <br />
                <br />
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised i
            </p>

            <footer>
                <p>
                    Price/Hour: 
                    <strong>R$100,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp"/>
                    Contact Me
                </button>
            </footer>
        </article>
    );
}

export default TeacherItem;