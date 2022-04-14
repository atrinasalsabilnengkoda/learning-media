import { v4 } from "uuid";

const SOAL = [
    {
        data_soal: { 'V_Matahari': [] },
        data_bank: [{
            id: v4(),
            content: '/ilustrasi/I_Matahari.png',
            kata: 'V_Matahari'
        },
        {
            id: v4(),
            content: '/ilustrasi/I_Anggur.png',
            kata: 'V_Anggur'
        },
        {
            id: v4(),
            content: '/ilustrasi/I_Mawar.png',
            kata: 'V_Mawar'
        }]
    },
];

export default SOAL