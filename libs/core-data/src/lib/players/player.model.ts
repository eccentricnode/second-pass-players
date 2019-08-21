export interface Player {
    id: number;
    name: string;
    height: string;
    position: string;
    number: number;
    team: string;
}

export const emptyPlayer: Player = {
    id: null, 
    name: '',
    height: '',
    position: '',
    number: null,
    team: ''
}
