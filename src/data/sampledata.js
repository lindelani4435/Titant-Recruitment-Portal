export const adviserColumns =[
    {field: 'fullNames', headerName: 'Full Names', width: 250, renderCell:(params)=> {
        return (
            <div className="cellWithImage"><img className="cellImage" src={params.row.avatar}  alt={params.row.fullNames}/>
                {params.row.fullNames}
            </div>
        )
        } },
    {field: 'email', headerName: 'Email Address', width: 200},
    {field: 'categories', headerName: 'Specialities', width: 250},
    {field: 'town', headerName: 'Suburb & Town', width: 200},
    {field: 'status', headerName: 'Status', width: 80, renderCell:(params) => {
        return(
            <div className={`cellWithStatus ${params.row.status}`}>{params.row.status}</div>
        )
}},
];

export const advisersRows =[
    {
        id: 1,
        fullNames: 'Kim G. Ndlovu (CA)',
        bio: 'I’m head of the Brenthurst Tygervalley office, ' +
            'a Certified Financial Planner® and a registered member ' +
            'of the Financial Planning Institute of Southern Africa (FPI).',
        email: 'given@givendlovu.co.za',
        status: 'online',
        town: 'Acardia, Pretoria',
        categories: ['Insurance', 'Business', 'Loans'],
        avatar: 'https://randomuser.me/api/portraits/women/9.jpg'
    },
    {
        id: 2,
        fullNames: 'Nhlakanipho Cele',
        bio: 'I’m head of the Brenthurst Tygervalley office, ' +
            'a Certified Financial Planner® and a registered member ' +
            'of the Financial Planning Institute of Southern Africa (FPI).',
        email: 'celen@magaye.co.za',
        status: 'busy',
        town: 'Bryston, Johannesburg',
        categories: ['Insurance', 'Business', 'Loans'],
        avatar: 'https://randomuser.me/api/portraits/men/1.jpg'
    },
    {
        id: 3,
        fullNames: 'Samkelo C Nene',
        bio: 'I’m head of the Brenthurst Tygervalley office, ' +
            'a Certified Financial Planner® and a registered member ' +
            'of the Financial Planning Institute of Southern Africa (FPI).',
        email: 'samkelo@shconsultants.co.za',
        status: 'offline',
        town: 'Hatfield, Pretoria',
        categories: ['Personal', 'Business', 'Loans'],
        avatar: 'https://randomuser.me/api/portraits/women/11.jpg'
    }
]