

import create from 'zustand'

export const [ useStore ] = create(set => ({
  rootId:null,
  activeId:null,
  activeContent: "Edit and start taking notes now.",
  files:[],
  actions: {
    setActiveId: activeId => set(() => ({ activeId: activeId })),
    setActiveContent: data => set(() => ({ activeContent: data })),
    setRootId: rootid => set( () => ({rootId: rootid})),
    setFiles: files => set( () => ({files:files})),
  },
}))

  