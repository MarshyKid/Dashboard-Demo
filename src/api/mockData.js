const mockData = {
    GMS : [
        {
          "Printed Date":"2025-08-04T10:57:00",
          "Badge ID":"234887",
          "Name":"Liam Wong",
          "Category":"Vendor",
          "Function":"Training",
          "Role":"Executive",
          "Status":"rejected"
        },
        {
          "Printed Date":"2025-08-03T08:29:00",
          "Badge ID":"732631",
          "Name":"Ethan Tan",
          "Category":"Visitor",
          "Function":"Logistics",
          "Role":"Support Engineer",
          "Status":"printed"
        },
        {
          "Printed Date":"2025-08-02T13:58:00",
          "Badge ID":"609342",
          "Name":"John Lim",
          "Category":"Visitor",
          "Function":"Admin",
          "Role":"Participant",
          "Status":"collected"
        },
        {
          "Printed Date":"2025-08-04T09:47:00",
          "Badge ID":"730591",
          "Name":"Mia Teo",
          "Category":"Staff",
          "Function":"Admin",
          "Role":"Auditor",
          "Status":"rejected"
        },
        {
          "Printed Date":"2025-08-05T14:52:00",
          "Badge ID":"247049",
          "Name":"Noah Ng",
          "Category":"Staff",
          "Function":"Security",
          "Role":"Auditor",
          "Status":"rejected"
        },
        {
          "Printed Date":"2025-08-03T08:36:00",
          "Badge ID":"768869",
          "Name":"Daniel Teo",
          "Category":"Vendor",
          "Function":"Admin",
          "Role":"Executive",
          "Status":"printed"
        },
        {
          "Printed Date":"2025-08-05T14:26:00",
          "Badge ID":"430075",
          "Name":"Isabella Lee",
          "Category":"Visitor",
          "Function":"Catering",
          "Role":"Auditor",
          "Status":"collected"
        },
        {
          "Printed Date":"2025-08-04T14:53:00",
          "Badge ID":"527209",
          "Name":"Marcus Goh",
          "Category":"Staff",
          "Function":"Logistics",
          "Role":"Manager",
          "Status":"printed"
        },
        {
          "Printed Date":"2025-08-03T14:20:00",
          "Badge ID":"913438",
          "Name":"John Lim",
          "Category":"Staff",
          "Function":"Training",
          "Role":"Auditor",
          "Status":"printed"
        },
        {
          "Printed Date":"2025-08-02T17:50:00",
          "Badge ID":"913822",
          "Name":"Nur Aisyah",
          "Category":"Vendor",
          "Function":"HR",
          "Role":"Intern",
          "Status":"rejected"
        },
        {
          "Printed Date":"2025-08-05T12:59:00",
          "Badge ID":"842497",
          "Name":"Alice Tan",
          "Category":"Staff",
          "Function":"Logistics",
          "Role":"Manager",
          "Status":"rejected"
        },
        {
          "Printed Date":"2025-08-03T08:13:00",
          "Badge ID":"548411",
          "Name":"Isabella Lee",
          "Category":"Vendor",
          "Function":"Catering",
          "Role":"Supervisor",
          "Status":"printed"
        },
        {
          "Printed Date":"2025-08-05T12:19:00",
          "Badge ID":"760590",
          "Name":"Isabella Lee",
          "Category":"Visitor",
          "Function":"Compliance",
          "Role":"Intern",
          "Status":"rejected"
        },
        {
          "Printed Date":"2025-08-03T08:28:00",
          "Badge ID":"207972",
          "Name":"Noah Ng",
          "Category":"Staff",
          "Function":"Security",
          "Role":"Participant",
          "Status":"rejected"
        },
        {
          "Printed Date":"2025-08-05T14:12:00",
          "Badge ID":"788428",
          "Name":"Daniel Teo",
          "Category":"Staff",
          "Function":"Compliance",
          "Role":"Technician",
          "Status":"rejected"
        },
        {
          "Printed Date":"2025-08-01T13:18:00",
          "Badge ID":"388854",
          "Name":"Mia Teo",
          "Category":"Visitor",
          "Function":"Admin",
          "Role":"Officer",
          "Status":"printed"
        },
        {
          "Printed Date":"2025-08-04T16:40:00",
          "Badge ID":"165040",
          "Name":"Daniel Teo",
          "Category":"Staff",
          "Function":"Logistics",
          "Role":"Executive",
          "Status":"collected"
        },
        {
          "Printed Date":"2025-08-02T15:31:00",
          "Badge ID":"661958",
          "Name":"Ethan Tan",
          "Category":"Vendor",
          "Function":"Logistics",
          "Role":"Technician",
          "Status":"printed"
        },
        {
          "Printed Date":"2025-08-06T09:39:00",
          "Badge ID":"882984",
          "Name":"Liam Wong",
          "Category":"Visitor",
          "Function":"Admin",
          "Role":"Intern",
          "Status":"rejected"
        },
        {
          "Printed Date":"2025-08-04T12:28:00",
          "Badge ID":"473882",
          "Name":"Aiden Lim",
          "Category":"Visitor",
          "Function":"Admin",
          "Role":"Officer",
          "Status":"collected"
        },
        {
          "Printed Date":"2025-08-05T15:16:00",
          "Badge ID":"213575",
          "Name":"Chloe Tan",
          "Category":"Visitor",
          "Function":"HR",
          "Role":"Coordinator",
          "Status":"collected"
        },
        {
          "Printed Date":"2025-08-02T12:06:00",
          "Badge ID":"381003",
          "Name":"Nur Aisyah",
          "Category":"Visitor",
          "Function":"Catering",
          "Role":"Support Engineer",
          "Status":"collected"
        },
        {
          "Printed Date":"2025-08-06T09:47:00",
          "Badge ID":"521878",
          "Name":"Isabella Lee",
          "Category":"Visitor",
          "Function":"Logistics",
          "Role":"Technician",
          "Status":"printed"
        },
        {
          "Printed Date":"2025-08-03T14:44:00",
          "Badge ID":"749372",
          "Name":"David Lee",
          "Category":"Visitor",
          "Function":"Security",
          "Role":"Coordinator",
          "Status":"collected"
        },
        {
          "Printed Date":"2025-08-03T17:49:00",
          "Badge ID":"727112",
          "Name":"Siti Nurhaliza",
          "Category":"Vendor",
          "Function":"Training",
          "Role":"Officer",
          "Status":"printed"
        },
        {
          "Printed Date":"2025-08-01T13:27:00",
          "Badge ID":"128099",
          "Name":"Sophia Goh",
          "Category":"Visitor",
          "Function":"HR",
          "Role":"Participant",
          "Status":"collected"
        },
        {
          "Printed Date":"2025-08-03T12:18:00",
          "Badge ID":"810014",
          "Name":"Alice Tan",
          "Category":"Vendor",
          "Function":"Catering",
          "Role":"Technician",
          "Status":"printed"
        },
        {
          "Printed Date":"2025-08-06T17:35:00",
          "Badge ID":"787432",
          "Name":"Aiden Lim",
          "Category":"Staff",
          "Function":"Admin",
          "Role":"Intern",
          "Status":"rejected"
        },
        {
          "Printed Date":"2025-08-01T13:29:00",
          "Badge ID":"668399",
          "Name":"Siti Nurhaliza",
          "Category":"Visitor",
          "Function":"Catering",
          "Role":"Technician",
          "Status":"rejected"
        },
        {
          "Printed Date":"2025-08-02T12:15:00",
          "Badge ID":"410426",
          "Name":"Liam Wong",
          "Category":"Vendor",
          "Function":"Training",
          "Role":"Technician",
          "Status":"rejected"
        },
        {
          "Printed Date":"2025-08-01T10:00:00",
          "Badge ID":"982233",
          "Name":"Lucas Ong",
          "Category":"Staff",
          "Function":"IT",
          "Role":"Supervisor",
          "Status":"rejected"
        },
        {
          "Printed Date":"2025-08-03T17:42:00",
          "Badge ID":"432459",
          "Name":"Liam Wong",
          "Category":"Visitor",
          "Function":"Logistics",
          "Role":"Supervisor",
          "Status":"collected"
        },
        {
          "Printed Date":"2025-08-04T14:25:00",
          "Badge ID":"489425",
          "Name":"Chloe Tan",
          "Category":"Visitor",
          "Function":"Security",
          "Role":"Support Engineer",
          "Status":"printed"
        },
        {
          "Printed Date":"2025-08-06T10:34:00",
          "Badge ID":"190146",
          "Name":"Mia Teo",
          "Category":"Visitor",
          "Function":"Training",
          "Role":"Intern",
          "Status":"collected"
        },
        {
          "Printed Date":"2025-08-03T17:04:00",
          "Badge ID":"841290",
          "Name":"Marcus Goh",
          "Category":"Vendor",
          "Function":"Security",
          "Role":"Coordinator",
          "Status":"printed"
        },
        {
          "Printed Date":"2025-08-01T09:20:00",
          "Badge ID":"814792",
          "Name":"Alice Tan",
          "Category":"Vendor",
          "Function":"Logistics",
          "Role":"Executive",
          "Status":"printed"
        },
        {
          "Printed Date":"2025-08-04T12:31:00",
          "Badge ID":"326637",
          "Name":"Siti Nurhaliza",
          "Category":"Visitor",
          "Function":"IT",
          "Role":"Manager",
          "Status":"collected"
        },
        {
          "Printed Date":"2025-08-02T08:24:00",
          "Badge ID":"992967",
          "Name":"Nur Aisyah",
          "Category":"Vendor",
          "Function":"Security",
          "Role":"Participant",
          "Status":"printed"
        },
        {
          "Printed Date":"2025-08-03T17:08:00",
          "Badge ID":"316570",
          "Name":"Chloe Tan",
          "Category":"Visitor",
          "Function":"Training",
          "Role":"Manager",
          "Status":"printed"
        },
        {
          "Printed Date":"2025-08-01T12:37:00",
          "Badge ID":"559326",
          "Name":"Aiden Lim",
          "Category":"Vendor",
          "Function":"Compliance",
          "Role":"Intern",
          "Status":"printed"
        },
        {
          "Printed Date":"2025-08-01T15:51:00",
          "Badge ID":"887703",
          "Name":"Marcus Goh",
          "Category":"Staff",
          "Function":"Compliance",
          "Role":"Executive",
          "Status":"rejected"
        },
        {
          "Printed Date":"2025-08-05T16:32:00",
          "Badge ID":"164220",
          "Name":"Siti Nurhaliza",
          "Category":"Staff",
          "Function":"Operations",
          "Role":"Officer",
          "Status":"collected"
        },
        {
          "Printed Date":"2025-08-01T12:21:00",
          "Badge ID":"986154",
          "Name":"Lucas Ong",
          "Category":"Vendor",
          "Function":"HR",
          "Role":"Support Engineer",
          "Status":"rejected"
        },
        {
          "Printed Date":"2025-08-06T15:16:00",
          "Badge ID":"110119",
          "Name":"Mia Teo",
          "Category":"Vendor",
          "Function":"Security",
          "Role":"Executive",
          "Status":"printed"
        },
        {
          "Printed Date":"2025-08-03T13:07:00",
          "Badge ID":"177847",
          "Name":"Emma Chua",
          "Category":"Vendor",
          "Function":"Catering",
          "Role":"Auditor",
          "Status":"collected"
        },
        {
          "Printed Date":"2025-08-01T15:10:00",
          "Badge ID":"350128",
          "Name":"Isabella Lee",
          "Category":"Vendor",
          "Function":"Compliance",
          "Role":"Participant",
          "Status":"rejected"
        },
        {
          "Printed Date":"2025-08-06T11:10:00",
          "Badge ID":"823845",
          "Name":"Benjamin Ho",
          "Category":"Staff",
          "Function":"IT",
          "Role":"Officer",
          "Status":"rejected"
        },
        {
          "Printed Date":"2025-08-01T08:59:00",
          "Badge ID":"771624",
          "Name":"Isabella Lee",
          "Category":"Visitor",
          "Function":"Compliance",
          "Role":"Support Engineer",
          "Status":"collected"
        },
        {
          "Printed Date":"2025-08-05T14:31:00",
          "Badge ID":"937294",
          "Name":"Daniel Teo",
          "Category":"Vendor",
          "Function":"Admin",
          "Role":"Officer",
          "Status":"rejected"
        },
        {
          "Printed Date":"2025-08-04T12:59:00",
          "Badge ID":"626888",
          "Name":"Marcus Goh",
          "Category":"Visitor",
          "Function":"IT",
          "Role":"Supervisor",
          "Status":"collected"
        },
        {
          "Printed Date":"2025-08-03T09:55:00",
          "Badge ID":"472135",
          "Name":"David Lee",
          "Category":"Visitor",
          "Function":"Compliance",
          "Role":"Officer",
          "Status":"printed"
        },
        {
          "Printed Date":"2025-08-06T11:08:00",
          "Badge ID":"183652",
          "Name":"Lucas Ong",
          "Category":"Vendor",
          "Function":"Catering",
          "Role":"Executive",
          "Status":"rejected"
        },
        {
          "Printed Date":"2025-08-05T15:54:00",
          "Badge ID":"318387",
          "Name":"Daniel Teo",
          "Category":"Staff",
          "Function":"HR",
          "Role":"Coordinator",
          "Status":"printed"
        },
        {
          "Printed Date":"2025-08-06T09:38:00",
          "Badge ID":"427322",
          "Name":"Aiden Lim",
          "Category":"Visitor",
          "Function":"Security",
          "Role":"Support Engineer",
          "Status":"collected"
        },
        {
          "Printed Date":"2025-08-02T09:03:00",
          "Badge ID":"468026",
          "Name":"David Lee",
          "Category":"Vendor",
          "Function":"Admin",
          "Role":"Coordinator",
          "Status":"printed"
        },
        {
          "Printed Date":"2025-08-03T13:17:00",
          "Badge ID":"383013",
          "Name":"Olivia Toh",
          "Category":"Visitor",
          "Function":"Operations",
          "Role":"Supervisor",
          "Status":"collected"
        },
        {
          "Printed Date":"2025-08-06T17:10:00",
          "Badge ID":"790560",
          "Name":"Lucas Ong",
          "Category":"Vendor",
          "Function":"Operations",
          "Role":"Intern",
          "Status":"collected"
        },
        {
          "Printed Date":"2025-08-03T14:56:00",
          "Badge ID":"767173",
          "Name":"Emma Chua",
          "Category":"Vendor",
          "Function":"Compliance",
          "Role":"Support Engineer",
          "Status":"rejected"
        },
        {
          "Printed Date":"2025-08-06T10:26:00",
          "Badge ID":"920429",
          "Name":"Nur Aisyah",
          "Category":"Vendor",
          "Function":"Logistics",
          "Role":"Participant",
          "Status":"collected"
        },
        {
          "Printed Date":"2025-08-01T15:03:00",
          "Badge ID":"655550",
          "Name":"Alice Tan",
          "Category":"Visitor",
          "Function":"IT",
          "Role":"Officer",
          "Status":"collected"
        },
        {
          "Printed Date":"2025-08-05T12:10:00",
          "Badge ID":"939854",
          "Name":"Benjamin Ho",
          "Category":"Visitor",
          "Function":"HR",
          "Role":"Coordinator",
          "Status":"printed"
        },
        {
          "Printed Date":"2025-08-03T15:06:00",
          "Badge ID":"498686",
          "Name":"Marcus Goh",
          "Category":"Visitor",
          "Function":"Security",
          "Role":"Coordinator",
          "Status":"collected"
        },
        {
          "Printed Date":"2025-08-03T14:38:00",
          "Badge ID":"243983",
          "Name":"Rachel Ong",
          "Category":"Vendor",
          "Function":"Security",
          "Role":"Supervisor",
          "Status":"printed"
        },
        {
          "Printed Date":"2025-08-05T11:23:00",
          "Badge ID":"379734",
          "Name":"Benjamin Ho",
          "Category":"Vendor",
          "Function":"Security",
          "Role":"Intern",
          "Status":"printed"
        },
        {
          "Printed Date":"2025-08-01T17:36:00",
          "Badge ID":"115491",
          "Name":"Mia Teo",
          "Category":"Staff",
          "Function":"Training",
          "Role":"Intern",
          "Status":"collected"
        },
        {
          "Printed Date":"2025-08-04T15:13:00",
          "Badge ID":"745582",
          "Name":"Olivia Toh",
          "Category":"Staff",
          "Function":"Logistics",
          "Role":"Supervisor",
          "Status":"printed"
        },
        {
          "Printed Date":"2025-08-04T13:09:00",
          "Badge ID":"835619",
          "Name":"Isabella Lee",
          "Category":"Visitor",
          "Function":"Security",
          "Role":"Executive",
          "Status":"collected"
        },
        {
          "Printed Date":"2025-08-05T13:59:00",
          "Badge ID":"587200",
          "Name":"Aiden Lim",
          "Category":"Vendor",
          "Function":"IT",
          "Role":"Support Engineer",
          "Status":"printed"
        },
        {
          "Printed Date":"2025-08-03T17:58:00",
          "Badge ID":"225794",
          "Name":"Marcus Goh",
          "Category":"Staff",
          "Function":"Catering",
          "Role":"Executive",
          "Status":"collected"
        },
        {
          "Printed Date":"2025-08-02T16:22:00",
          "Badge ID":"644923",
          "Name":"Olivia Toh",
          "Category":"Staff",
          "Function":"Training",
          "Role":"Officer",
          "Status":"collected"
        },
        {
          "Printed Date":"2025-08-03T09:03:00",
          "Badge ID":"539876",
          "Name":"Emma Chua",
          "Category":"Vendor",
          "Function":"IT",
          "Role":"Officer",
          "Status":"printed"
        },
        {
          "Printed Date":"2025-08-05T09:06:00",
          "Badge ID":"316029",
          "Name":"Emma Chua",
          "Category":"Visitor",
          "Function":"Training",
          "Role":"Participant",
          "Status":"printed"
        },
        {
          "Printed Date":"2025-08-02T10:37:00",
          "Badge ID":"385483",
          "Name":"Rachel Ong",
          "Category":"Visitor",
          "Function":"Training",
          "Role":"Auditor",
          "Status":"rejected"
        },
        {
          "Printed Date":"2025-08-04T17:21:00",
          "Badge ID":"954698",
          "Name":"Isabella Lee",
          "Category":"Staff",
          "Function":"HR",
          "Role":"Coordinator",
          "Status":"printed"
        },
        {
          "Printed Date":"2025-08-03T17:22:00",
          "Badge ID":"216538",
          "Name":"Nur Aisyah",
          "Category":"Vendor",
          "Function":"Catering",
          "Role":"Participant",
          "Status":"collected"
        },
        {
          "Printed Date":"2025-08-06T12:25:00",
          "Badge ID":"805484",
          "Name":"Benjamin Ho",
          "Category":"Staff",
          "Function":"HR",
          "Role":"Officer",
          "Status":"collected"
        },
        {
          "Printed Date":"2025-08-03T12:00:00",
          "Badge ID":"686096",
          "Name":"Emma Chua",
          "Category":"Staff",
          "Function":"HR",
          "Role":"Auditor",
          "Status":"rejected"
        },
        {
          "Printed Date":"2025-08-03T09:00:00",
          "Badge ID":"996440",
          "Name":"Aiden Lim",
          "Category":"Visitor",
          "Function":"Logistics",
          "Role":"Technician",
          "Status":"printed"
        },
        {
          "Printed Date":"2025-08-03T15:50:00",
          "Badge ID":"705444",
          "Name":"Marcus Goh",
          "Category":"Vendor",
          "Function":"HR",
          "Role":"Coordinator",
          "Status":"collected"
        },
        {
          "Printed Date":"2025-08-01T08:46:00",
          "Badge ID":"815240",
          "Name":"John Lim",
          "Category":"Vendor",
          "Function":"Operations",
          "Role":"Executive",
          "Status":"collected"
        },
        {
          "Printed Date":"2025-08-03T12:03:00",
          "Badge ID":"791452",
          "Name":"Marcus Goh",
          "Category":"Visitor",
          "Function":"Compliance",
          "Role":"Participant",
          "Status":"printed"
        },
        {
          "Printed Date":"2025-08-02T08:39:00",
          "Badge ID":"679772",
          "Name":"Siti Nurhaliza",
          "Category":"Staff",
          "Function":"Training",
          "Role":"Manager",
          "Status":"printed"
        },
        {
          "Printed Date":"2025-08-01T11:41:00",
          "Badge ID":"627641",
          "Name":"Alice Tan",
          "Category":"Vendor",
          "Function":"IT",
          "Role":"Participant",
          "Status":"rejected"
        },
        {
          "Printed Date":"2025-08-05T08:10:00",
          "Badge ID":"201066",
          "Name":"Emma Chua",
          "Category":"Vendor",
          "Function":"Operations",
          "Role":"Manager",
          "Status":"collected"
        },
        {
          "Printed Date":"2025-08-05T08:41:00",
          "Badge ID":"883459",
          "Name":"Daniel Teo",
          "Category":"Staff",
          "Function":"Operations",
          "Role":"Auditor",
          "Status":"collected"
        },
        {
          "Printed Date":"2025-08-01T14:33:00",
          "Badge ID":"527960",
          "Name":"Isabella Lee",
          "Category":"Visitor",
          "Function":"Catering",
          "Role":"Officer",
          "Status":"collected"
        },
        {
          "Printed Date":"2025-08-01T13:47:00",
          "Badge ID":"857936",
          "Name":"Aiden Lim",
          "Category":"Staff",
          "Function":"Catering",
          "Role":"Manager",
          "Status":"rejected"
        },
        {
          "Printed Date":"2025-08-01T12:51:00",
          "Badge ID":"434111",
          "Name":"Daniel Teo",
          "Category":"Staff",
          "Function":"Compliance",
          "Role":"Manager",
          "Status":"printed"
        },
        {
          "Printed Date":"2025-08-06T14:09:00",
          "Badge ID":"392823",
          "Name":"Liam Wong",
          "Category":"Vendor",
          "Function":"Security",
          "Role":"Supervisor",
          "Status":"printed"
        },
        {
          "Printed Date":"2025-08-03T17:51:00",
          "Badge ID":"679521",
          "Name":"Daniel Teo",
          "Category":"Staff",
          "Function":"Compliance",
          "Role":"Participant",
          "Status":"printed"
        },
        {
          "Printed Date":"2025-08-01T13:48:00",
          "Badge ID":"196597",
          "Name":"Marcus Goh",
          "Category":"Visitor",
          "Function":"Admin",
          "Role":"Manager",
          "Status":"printed"
        },
        {
          "Printed Date":"2025-08-06T08:03:00",
          "Badge ID":"343371",
          "Name":"David Lee",
          "Category":"Visitor",
          "Function":"IT",
          "Role":"Intern",
          "Status":"rejected"
        },
        {
          "Printed Date":"2025-08-05T08:56:00",
          "Badge ID":"294545",
          "Name":"Nur Aisyah",
          "Category":"Vendor",
          "Function":"Catering",
          "Role":"Executive",
          "Status":"printed"
        },
        {
          "Printed Date":"2025-08-02T09:22:00",
          "Badge ID":"328644",
          "Name":"Marcus Goh",
          "Category":"Vendor",
          "Function":"Operations",
          "Role":"Manager",
          "Status":"collected"
        },
        {
          "Printed Date":"2025-08-03T12:03:00",
          "Badge ID":"716092",
          "Name":"Marcus Goh",
          "Category":"Visitor",
          "Function":"Operations",
          "Role":"Supervisor",
          "Status":"collected"
        },
        {
          "Printed Date":"2025-08-02T15:43:00",
          "Badge ID":"857282",
          "Name":"David Lee",
          "Category":"Visitor",
          "Function":"Catering",
          "Role":"Technician",
          "Status":"collected"
        },
        {
          "Printed Date":"2025-08-04T11:40:00",
          "Badge ID":"761784",
          "Name":"Ethan Tan",
          "Category":"Vendor",
          "Function":"HR",
          "Role":"Technician",
          "Status":"rejected"
        },
        {
          "Printed Date":"2025-08-02T16:36:00",
          "Badge ID":"757203",
          "Name":"Sophia Goh",
          "Category":"Visitor",
          "Function":"IT",
          "Role":"Coordinator",
          "Status":"rejected"
        },
        {
          "Printed Date":"2025-08-04T10:02:00",
          "Badge ID":"976118",
          "Name":"Noah Ng",
          "Category":"Staff",
          "Function":"Training",
          "Role":"Officer",
          "Status":"collected"
        },
        {
          "Printed Date":"2025-08-05T08:38:00",
          "Badge ID":"797378",
          "Name":"Daniel Teo",
          "Category":"Staff",
          "Function":"Security",
          "Role":"Coordinator",
          "Status":"collected"
        }
      ],
    eligibleItems : [
        {category: 'Workforce Staff', 'Pants (Unisex) - Dark Blue': '2', 'Round Neck T-Shirt (Unisex) Short Sleeves - Red' : '1'},
        {category: 'AQUA Bureau', 'Cap - Light Silver' : '1', 'T-Shirt (Unisex) Short Sleeves - Red': '1', 'Belt - Black': '1'},
        {category: 'GovTech Volunteers', 'Round Neck T-Shirt (Unisex) Short Sleeves - Gradient Purple': '2'}
    ],
    items: [
        {name: 'Pants (Unisex) - Dark Blue'},
        {name: 'Round Neck T-Shirt (Unisex) Short Sleeves - Red'},
        {name: 'Cap - Light Silver'},
        {name: 'T-Shirt (Unisex) Short Sleeves - Red'},
        {name: 'Round Neck T-Shirt (Unisex) Short Sleeves - Gradient Purple'}
    ]
};

export default mockData;