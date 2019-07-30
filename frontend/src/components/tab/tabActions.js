export function selectTab(id) {
    return {
        type: 'TAB_SELECTED',
        payload: id
    }
}