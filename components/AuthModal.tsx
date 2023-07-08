"use client";

import useAuthModal from '@/hooks/useAuthModal';
import Modal from './Modal';

import { useSessionContext, useSupabaseClient } from '@supabase/auth-helpers-react';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const AuthModal = () => {
    const router = useRouter();
    const supabaseClient = useSupabaseClient();
    const { session } = useSessionContext();
    const { onClose, isOpen } = useAuthModal();

    useEffect(() => {
        if (session) {
            router.refresh();
            onClose();
        }
    }, [session, router, onClose]);

    const onChange = (open: boolean) => {
        if (!open) {
            onClose();
        }
    }

    return (
        <Modal
            title="Welcome Back"
            description='Test Description'
            isOpen={isOpen}
            onChange={() => { onChange }}
        >
            <Auth
                supabaseClient={supabaseClient}
                providers={['github']}
                magicLink={true}
                appearance={{
                    theme: ThemeSupa,
                    variables: {
                        default: {
                            colors: {
                                brand: '#404040',
                                brandAccent: '#22c55e'
                            }
                        }
                    }
                }}
                theme="dark"
            />
        </Modal>
    );
}

export default AuthModal;