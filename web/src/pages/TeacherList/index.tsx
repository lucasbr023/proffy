import React, { useState, FormEvent }  from 'react'
import PageHeader from '../../components/PageHeader'

import './styles.css'
import TeacherItem, {Teacher} from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';
import api from '../../services/api';

function TeacherList(){

    const [subject, setSubject] = useState('');
    const [week_day, setWeekDay] = useState('');
    const [time, setHour] = useState('');

    const [teachers, setTeachers] = useState([]);


    
    async function searchTeachers(e: FormEvent){
        e.preventDefault();
        const response = await api.get('classes', {
            params:{
                subject,
                week_day,
                time
            }
        });

        setTeachers(response.data);
    }

    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="This is the available teachers">
                <form id="search-teachers" onSubmit={searchTeachers}>
                    <Select 
                        name='subject' 
                        label='Subject'
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        options={[
                            {value: 'Programming', label: 'Programming'},
                            {value: 'Ates', label: 'Artes'},
                            {value: 'Inglês', label: 'Inglês'},
                            {value: 'Math', label: 'Math'},
                        ]}
                    />
                    <Select 
                        name='week-day' 
                        label='Week day'
                        value={week_day}
                        onChange={(e) => setWeekDay(e.target.value)}
                        options={[
                            {label: 'Sunday', value: '0'},
                            {label: 'Monday', value: '1'},
                            {label: 'Tuesday', value: '2'},
                            {label: 'Wednesday', value: '3'},
                            {label: 'Thursday', value: '4'},
                            {label: 'Friday', value: '5'},
                            {label: 'Saturday', value: '6'},
                        ]}
                    />
                    <Input type='time' 
                           name='time' 
                           label='Hour'
                           value={time}
                           onChange={(e) => setHour(e.target.value)}  />

                    <button type='submit'>Search</button>
                </form>
            </PageHeader>
            <main>
                {teachers.map((teacher: Teacher)=> {
                    return <TeacherItem key={teacher.id} teacher={teacher} />
                })}
            </main>
        </div>
    );
}

export default TeacherList;