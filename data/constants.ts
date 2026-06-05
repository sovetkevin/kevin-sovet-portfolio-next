export type AvailabilityStatus = 'busy' | 'open' | 'partial';

/** Change this value: 'busy' | 'open' | 'partial' */
export const AVAILABILITY_STATUS = 'busy' as AvailabilityStatus;

export const isEmbeddedConsultingAvailable = AVAILABILITY_STATUS === 'open';

export { PROJECT_FILTER_OPTIONS, type ProjectFilterOption } from './filters';
export { EXPERIENCE_DATA } from './experience';
export { RECOMMENDATIONS_DATA } from './recommendations';
export { PROJECTS_DATA } from './projects/index';
