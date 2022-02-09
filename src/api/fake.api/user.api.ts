// Profession Type
type DoctorType = {
    _id: string
    name: "Доктор"
}
type WaiterType = {
    _id: string
    name: "Официант"
}
type PhysicsType = {
    _id: string
    name: "Физик"
}
type EngineerType = {
    _id: string
    name: "Инженер"
}
type ActorType = {
    _id: string
    name: "Актер"
}
type CookType = {
    _id: string
    name: "Повар"
}
type ProfessionType = {
    name: string
    _id: string
}

type QualityType = {
    _id: string
    name: string
    color: string
}
type QualitiesType = {
    tedious: QualityType
    strange: QualityType
    buller: QualityType
    alcoholic: QualityType
    handsome: QualityType
    uncertain: QualityType
}

type ProfessionsType = {
    doctor: DoctorType
    waiter: WaiterType
    physics: PhysicsType
    engineer: EngineerType
    actor: ActorType
    cook: CookType
}
type ProfType = DoctorType | WaiterType | PhysicsType | EngineerType | ActorType | CookType | ProfessionType

export type UsersType = {
    _id: string
    name: string
    profession: ProfType
    qualities: Array<QualityType>
    completedMeetings: number
    rate: number
    bookmark: boolean
}


const professions: ProfessionsType = {
    doctor: {_id: "67rdca3eeb7f6fgeed471818", name: "Доктор"},
    waiter: {_id: "67rdca3eeb7f6fgeed471820", name: "Официант"},
    physics: {_id: "67rdca3eeb7f6fgeed471814", name: "Физик"},
    engineer: {_id: "67rdca3eeb7f6fgeed471822", name: "Инженер"},
    actor: {_id: "67rdca3eeb7f6fgeed471824", name: "Актер"},
    cook: {_id: "67rdca3eeb7f6fgeed471829", name: "Повар"}
}

const qualities: QualitiesType = {
    tedious: {_id: "67rdca3eeb7f6fgeed471198", name: "Нудила", color: "primary"},
    strange: {_id: "67rdca3eeb7f6fgeed471100", name: "Странный", color: "secondary"},
    buller: {_id: "67rdca3eeb7f6fgeed4711012", name: "Троль", color: "success"},
    alcoholic: {_id: "67rdca3eeb7f6fgeed471101", name: "Алкоголик", color: "danger"},
    handsome: {_id: "67rdca3eeb7f6fgeed471102", name: "Красавчик", color: "info"},
    uncertain: {_id: "67rdca3eeb7f6fgeed471103", name: "Неуверенный", color: "dark"},

}

const users: Array<UsersType> = [
    {
        _id: "67rdca3eeb7f6fgeed471815",
        name: "Джон Дориан",
        profession: professions.doctor,
        qualities: [qualities.tedious, qualities.uncertain, qualities.strange],
        completedMeetings: 36,
        rate: 2.5,
        bookmark: false
    },
    {
        _id: "67rdca3eeb7f6fgeed471816",
        name: "Кокс",
        profession: professions.doctor,
        qualities: [qualities.buller, qualities.handsome, qualities.alcoholic],
        completedMeetings: 15,
        rate: 2.5,
        bookmark: false
    },
    {
        _id: "67rdca3eeb7f6fgeed471817",
        name: "Боб Келсо",
        profession: professions.doctor,
        qualities: [qualities.buller],
        completedMeetings: 247,
        rate: 3.5,
        bookmark: false
    },
    {
        _id: "67rdca3eeb7f6fgeed471818",
        name: "Рэйчел Грин",
        profession: professions.waiter,
        qualities: [qualities.uncertain],
        completedMeetings: 148,
        rate: 3.5,
        bookmark: false
    },
    {
        _id: "67rdca3eeb7f6fgeed471819",
        name: "Шелдон Купер",
        profession: professions.physics,
        qualities: [qualities.strange, qualities.tedious],
        completedMeetings: 37,
        rate: 4.6,
        bookmark: false
    },
    {
        _id: "67rdca3eeb7f6fgeed471820",
        name: "Леонард Хофстедтер",
        profession: professions.physics,
        qualities: [qualities.strange, qualities.uncertain],
        completedMeetings: 147,
        rate: 3.5,
        bookmark: false
    },
    {
        _id: "67rdca3eeb7f6fgeed471821",
        name: "Говард Воловиц",
        profession: professions.engineer,
        qualities: [qualities.strange, qualities.tedious],
        completedMeetings: 72,
        rate: 3.5,
        bookmark: false
    },
    {
        _id: "67rdca3eeb7f6fgeed471822",
        name: "Никола Тесла",
        profession: professions.engineer,
        qualities: [qualities.handsome],
        completedMeetings: 72,
        rate: 5,
        bookmark: false
    },
    {
        _id: "67rdca3eeb7f6fgeed471823",
        name: "Моника Геллер",
        profession: professions.cook,
        qualities: [qualities.strange, qualities.uncertain],
        completedMeetings: 17,
        rate: 4.5,
        bookmark: false
    },
    {
        _id: "67rdca3eeb7f6fgeed471824",
        name: "Рататуй",
        profession: professions.cook,
        qualities: [qualities.handsome, qualities.buller],
        completedMeetings: 17,
        rate: 4.5,
        bookmark: false
    },
    {
        _id: "67rdca3eeb7f6fgeed47181f",
        name: "Джоуи Триббиани",
        profession: professions.actor,
        qualities: [qualities.uncertain, qualities.strange],
        completedMeetings: 434,
        rate: 3.5,
        bookmark: false
    },
    {
        _id: "67rdca3eeb7f6fgeed47181r",
        name: "Брэд Питт",
        profession: professions.actor,
        qualities: [qualities.handsome],
        completedMeetings: 434,
        rate: 5,
        bookmark: false
    },
]

export function fetchAll() {
    return users
}
