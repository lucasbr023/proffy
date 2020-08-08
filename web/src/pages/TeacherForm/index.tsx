import React, {useState, FormEvent}  from 'react'
import { useHistory } from 'react-router-dom'
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Textarea from '../../components/TextArea';
import Select from '../../components/Select';
import './styles.css'
import warningIcon from '../../assets/images/icons/warning.svg'
import api from '../../services/api';


function TeacherForm(){

    const history = useHistory();

    const [name, setName] = useState('');
    const [avatar, setAvatar] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [bio, setBio] = useState('');
    const [subject, setSubject] = useState('');
    const [cost, setCost] = useState('');

    const [scheduleItems, setScheduleItems] = useState([
        {week_day: 0, from: '', to: ''}
    ]);

    function handleCreateClass(e:FormEvent) {
        e.preventDefault();
        api.post('classes', {
            name, 
            avatar, 
            whatsapp, 
            bio, 
            subject, 
            cost: Number(cost),
            schedule: scheduleItems
        }).then(() => {
            alert('successful registration!');
            history.push('/')
        }).catch(()=> {
            alert('registration failed!');
        })
    }
    
    function addNewScheduleTime() {
        setScheduleItems([
            ...scheduleItems, 
            {
                week_day: 0, from: '', to: ''
            }
        ]);
    }

    function setScheduleItemValue(position: number, field: string, value: string){
        const updateScheduleItems = scheduleItems.map((scheduleItem, index) =>{
            if(index === position){
                return {
                    ...scheduleItem, [field]: value
                }
            }
            return scheduleItem;
        })
        setScheduleItems(updateScheduleItems);
    }
    
    return (
        <div id="page-teacher-form" className="container">
            <PageHeader title="how amazing you want to teach" description="The first step is to fill this subscription form" />

            <main>
                <form onSubmit={handleCreateClass}>
                    <fieldset>
                        <legend>Your data</legend>
                        <Input name='name' 
                            label='Full name' 
                            value={name} 
                            onChange={(e) => { setName(e.target.value) }} />
                        <Input name='avatar' 
                            label='Avatar' 
                            value={avatar}
                            onChange={(e) => { setAvatar(e.target.value) }} />
                        <Input name='whatsapp' 
                            label='Whatsapp'
                            value={whatsapp}
                            onChange={(e) => { setWhatsapp(e.target.value) }} />
                        <Textarea name="bio" 
                                label='Biography'
                                value={bio}
                                onChange={(e) => { setBio(e.target.value) }} />
                    </fieldset>
                    <fieldset>
                        <legend>About the class</legend>
                        <Select 
                            name='subject' 
                            label='Subject'
                            value={subject}
                            onChange={(e)=> { setSubject(e.target.value) }}
                            options={[
                                {value: 'Programming', label: 'Programming'},
                                {value: 'Ates', label: 'Artes'},
                                {value: 'Inglês', label: 'Inglês'},
                                {value: 'Math', label: 'Math'},
                            ]}
                        />
                        <Input name='cost' 
                            label='cost of your class hour'
                            value={cost}
                            onChange={(e) => { setCost(e.target.value) }}  />
                    </fieldset>

                    <fieldset>
                        <legend>Available times
                        <button type='button' onClick={addNewScheduleTime}>
                            + New time
                        </button>
                        </legend>
                    
                        {scheduleItems.map((scheduleItem, index) => {
                            return (
                                <div key={scheduleItem.week_day} className="schedule-item">
                                    <Select 
                                        name='week_day' 
                                        label='Week day'
                                        value={scheduleItem.week_day}
                                        onChange={(e) => { setScheduleItemValue(index, 'week-day', e.target.value) }}
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
                                    <Input name='from' 
                                           label='From' 
                                           type='time'
                                           value={scheduleItem.from}
                                           onChange={(e) => { setScheduleItemValue(index, 'from', e.target.value) }}/>
                                    <Input name='to' 
                                           label='To' 
                                           type='time'
                                           value={scheduleItem.to}
                                           onChange={(e) => { setScheduleItemValue(index, 'to', e.target.value) }}/>
                                </div>
                            )}
                        )}
                    </fieldset>
                    <footer>
                        <p>
                            <img src={warningIcon} alt="Important warning"/>
                            Important! <br />
                            Fill all the data
                        </p>
                        <button type='submit' >Save registration</button>
                    </footer>
                </form>
            </main>
        </div>
    );
}

export default TeacherForm;