import { v4 } from "uuid";
import soal1 from '../assets/Bab6/audio_arabic/Apel.mp3'

const SOAL = [
    {
        data_soal: { 'I_Apel': [] },
        audio: soal1,
        data_bank: [{
            id: v4(),
            content: '/ilustrasi/I_Anggur.png',
            kata: 'I_Anggur'
        },
        {
            id: v4(),
            content: '/ilustrasi/I_Apel.png',
            kata: 'I_Apel'
        },
        {
            id: v4(),
            content: '/ilustrasi/I_Bakung.png',
            kata: 'I_Bakung'
        }]
    },
];

export default SOAL