import {create} from 'zustand'

export enum CreatorChatVariant {
    STREAM = "STREAM",
    COMMUNITY = "COMMUNITY"
}



interface CreatorChatSiderbarStore {
    collapsed: boolean;
    onExpand:() => void
    onCollapse: ()=>void;
    variant: CreatorChatVariant;
    onChangeVariant: (variant: CreatorChatVariant) => void;
}

export const CreatorUserChatSiderbar = create<CreatorChatSiderbarStore>((set) => ({
    collapsed: false,
    onExpand: () => set(() => ({collapsed: false})),
    onCollapse: () => set(() => ({collapsed: true})),
    variant:CreatorChatVariant.STREAM,
    onChangeVariant:(variant:CreatorChatVariant) => set(() =>  ({ variant}))
}))