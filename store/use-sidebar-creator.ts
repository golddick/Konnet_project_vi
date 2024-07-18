import {create} from 'zustand'


// export enum ChatVariant {
//     CHAT = "CHAT",
//     COMMUNITY = "COMMUNITY"
// }

interface CreatorSidebarStore {
    collapsed: boolean;
    onExpand:() => void
    onCollapse: ()=>void;
}

export const useCreatorSidebar = create<CreatorSidebarStore>((set) => ({
    collapsed: true,
    onExpand: () => set(() => ({collapsed: false})),
    onCollapse: () => set(() => ({collapsed: true}))
}))