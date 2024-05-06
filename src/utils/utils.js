// Returns the filtered array
export function applyFilters(jobs, filters) {
    return jobs.filter(job => {
        return Object.keys(filters).every(filterCategory => {
            const filterValues = filters[filterCategory];
            // If the job does not have the property or filter is not set, pass the filter
            if (!job[filterCategory] || filterValues.length === 0) {
                return true;
            }

            // Special handling for location filter
            if (filterCategory === 'location') {
                return filterValues.some(filter => {
                    if (filter.value === 'remote') {
                        return job.location === 'remote';
                    } else if (filter.value === 'in-office') {
                        return job.location !== 'remote';
                    }
                    return false;
                });
            }

            // General handling for other filters
            return filterValues.some(filter => job[filterCategory] === filter.value);
        });
    });
}
