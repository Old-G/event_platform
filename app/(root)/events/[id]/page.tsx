import Collection from '@/components/shared/Collection'
import EventCard from '@/components/shared/EventCard'
import {
  getEventById,
  getRelatedEventsByCategory,
} from '@/lib/actions/event.actions'
import { SearchParamProps } from '@/types'

const EventDetails = async ({
  params: { id },
  searchParams,
}: SearchParamProps) => {
  const event = await getEventById(id)

  const relatedEvents = await getRelatedEventsByCategory({
    categoryId: event.category._id,
    eventId: event._id,
    page: searchParams.page as string,
  })

  return (
    <>
      <section className='flex justify-center bg-primary-50 bg-dotted-pattern bg-contain'>
        <EventCard event={event} />
      </section>

      {/* EVENTS with the same category */}
      <section className='wrapper my-8 flex flex-col gap-8 md:gap-12'>
        <h2 className='h2-bold'>Related Events</h2>

        <Collection
          data={relatedEvents?.data}
          emptyTitle='No Events Found'
          emptyStateSubtext='Come back later'
          collectionType='All_Events'
          limit={3}
          page={searchParams.page as string}
          totalPages={relatedEvents?.totalPages}
        />
      </section>
    </>
  )
}

export default EventDetails
