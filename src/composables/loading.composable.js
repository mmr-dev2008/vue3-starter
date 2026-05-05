import { ref, computed } from 'vue';

export function useLoading() {
    const loading = ref(0);
    const isLoading = computed(() => loading.value > 0);

    function startLoading() {
        loading.value++;
    }

    function endLoading() {
        loading.value--;
    }

    function startFakeLoading(delay = 500) {
        startLoading();

        return new Promise(function (resolve) {
            setTimeout(function () {
                endLoading();
                resolve(true);
            }, delay);
        });
    }

    return {
        isLoading,
        startLoading,
        endLoading,
        startFakeLoading
    };
}
