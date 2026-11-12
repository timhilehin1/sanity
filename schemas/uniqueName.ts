// Rejects a name if another document of the same type already uses it (case-insensitive).
// Search uses these names as its allowed lists, so duplicates like "Grey" and "grey" would split results.
export const uniqueName = (field: string) => async (value: any, context: any) => {
  if (!value) return true
  const client = context.getClient({apiVersion: '2023-01-01'})
  const id = (context.document?._id || '').replace(/^drafts\./, '')
  const count = await client.fetch(
    `count(*[_type == $type && lower(${field}) == lower($value) && !(_id in [$id, "drafts." + $id])])`,
    {type: context.document?._type, value: value.trim(), id},
  )
  return count === 0 ? true : `"${value}" already exists`
}
