'use client'

import { useMutation } from '~/hooks'
import apiRequest from '~/lib/apiRequest'

const createMember = (payload: { serverId: string; userId?: string }) =>
  apiRequest.post('/discord/api/members', payload)

export default function CreateMemberButton(props: { serverId: string; userId?: string }) {
  const mutation = useMutation(createMember)

  return (
    <button
      className='rounded-full bg-slate-50/10 p-3 font-icon text-3xl'
      onClick={() => {
        mutation.mutate(props)
      }}
      type='button'>
      add
    </button>
  )
}
