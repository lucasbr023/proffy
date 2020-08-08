import React from 'react'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'
import './styles.css'
import api from '../../services/api'

export interface Teacher{
    id: number,
    name: string,
    avatar: string,
    bio: string,
    cost: number,
    subject: string,
    user_id: number,
    whatsapp: string
}
interface TeacherItemProps{
    teacher: Teacher
}

const TeacherItem: React.FC<TeacherItemProps> = ({teacher}) => {

    function createNewConnection(){
        api.post('connections', {
            user_id: teacher.id
        })
    }

    return (
        <article className="teacher-item">
            <header>
                <img src={teacher.avatar} alt="Lucas Carvalho"/>
                <div>
                    <strong>{teacher.name}</strong>
                    <span>{teacher.subject}</span>
                </div>
            </header>

            <p>
                {teacher.bio}
            </p>

            <footer>
                <p>
                    Price/Hour: 
                    <strong>R${teacher.cost}</strong>
                </p>
                <a href={`https://wa.me/${teacher.whatsapp}`} onClick={createNewConnection}>
                    <img src={whatsappIcon} alt="Whatsapp"/>
                    Contact Me
                </a>
            </footer>
        </article>
    );
}

export default TeacherItem;