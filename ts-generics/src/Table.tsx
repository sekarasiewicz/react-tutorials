interface TableProps <TItem> {
  items: TItem[]
  renderItem: (item: TItem) => JSX.Element
}


export const Table = <TItem, >(props: TableProps<TItem>) => {
  return null
}

export const  Component = () => {
  return (
    <Table items={[{id: '1', firstName: 'Burke'}]}
    renderItem={(item) => <p>{item.id}</p>}></Table>
  )
}
