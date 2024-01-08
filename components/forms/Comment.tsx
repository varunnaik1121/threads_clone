'use client';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import * as z from 'zod';
import Image from 'next/image';

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

import { usePathname, useRouter } from 'next/navigation';

// import { updateUser } from '@/lib/actions/user.actions';
// import { UserValidation } from '@/lib/validations/user';
import { CommentsValidation } from '@/lib/validations/thread';
// import { createThread } from '@/lib/actions/thread.actions';

interface Props {
  threadId: String;
  currentUserImg: String;
  currentUserId: String;
}

const Comment = ({ threadId, currentUserImg, currentUserId }: Props) => {
  const pathname = usePathname();
  const router = useRouter();
  const form = useForm({
    resolver: zodResolver(CommentsValidation),
    defaultValues: {
      thread: '',
    },
  });

  const onSubmit = async (values: z.infer<typeof CommentsValidation>) => {
    // await createThread({
    //   text: values.thread,
    //   author: userId,
    //   communityId: null,
    //   path: pathname,
    // });
    // router.push('/');
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="comment-form">
        <FormField
          control={form.control}
          name="thread"
          render={({ field }) => (
            <FormItem className="flex  gap-3 w-full items-center">
              <FormLabel>
                <Image
                  src={currentUserImg}
                  alt="current-user"
                  width={48}
                  height={48}
                  className="rounded-full object-cover"
                />
              </FormLabel>
              <FormControl className="border-none bg-transparent">
                <Input
                  {...field}
                  type="text"
                  placeholder="Comment..."
                  className="no-focus text-light"
                />
              </FormControl>
            </FormItem>
          )}
        />
        <Button type="submit" className="comment-form_btn">
          Post thread
        </Button>
      </form>
    </Form>
  );
};
export default Comment;
