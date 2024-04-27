<template>
    <div className="items-center h-[400px] justify-center -z-10 mb-5">
        <div className="flex flex-col items-end">
            <h5 className="font-bold tracking-tight text-gray-900">
                {{comment.author}} ({{comment.rating}}/10)
            </h5>
            <p className="text-sm font-light italic mt-2">{{new Date(comment.publishedDate).toDateString()}}</p>
        </div>
        <p className="font-normal text-gray-700 dark:text-gray-400">
            {{comment.comment}}
        </p>
        <p className="font-light italic text-gray-700 dark:text-gray-400 mt-2">
            {{comment.commentEn}}
        </p>
    </div>
</template>

<script lang="ts">
import type IComment from '../models/comment'
export default {
    name: 'Comment',
    props: {
        comment: {
            type: Object as () => IComment,
            required: true
        }
    }
}
</script>