import {create} from 'zustand'

export enum ChatVariant {
    RECOMMENDED = "RECOMMENDED",
    COMMUNITY = "COMMUNITY"
}



interface ChatSiderbarStore {
    collapsed: boolean;
    onExpand:() => void
    onCollapse: ()=>void;
    variant: ChatVariant;
    onChangeVariant: (variant: ChatVariant) => void;
}

export const useChatSiderbar = create<ChatSiderbarStore>((set) => ({
    collapsed: true,
    onExpand: () => set(() => ({collapsed: false})),
    onCollapse: () => set(() => ({collapsed: true})),
    variant:ChatVariant.RECOMMENDED,
    onChangeVariant:(variant:ChatVariant) => set(() =>  ({ variant}))
})) 