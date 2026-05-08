import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router'
import { useAuth } from '../hooks/useAuth'

const Login = () => {
    const { loading, handleLogin } = useAuth()
    const navigate = useNavigate()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [focused, setFocused] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()
        const user = await handleLogin({ email, password })
        if (user) navigate('/')
    }

    if (loading) {
        return (
            <main style={styles.main}>
                <div style={styles.loader}>
                    <div style={styles.loaderBar} />
                    <span style={styles.loaderText}>Authenticating...</span>
                </div>
            </main>
        )
    }

    return (
        <main style={styles.main}>
            {/* Background grid texture */}
            <div style={styles.gridOverlay} aria-hidden="true" />

            {/* Red accent blob */}
            <div style={styles.redGlow} aria-hidden="true" />

            <div style={styles.card}>
                {/* Top accent bar */}
                <div style={styles.topBar} />

                <div style={styles.cardInner}>
                    {/* Header */}
                    <div style={styles.header}>
                        <div style={styles.logoMark}>
                            <span style={styles.logoSquare} />
                            <span style={styles.logoSquareSm} />
                        </div>
                        <h1 style={styles.title}>Welcome back</h1>
                        <p style={styles.subtitle}>Sign in to your account</p>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} style={styles.form}>
                        <div style={styles.inputGroup}>
                            <label htmlFor="email" style={styles.label}>
                                Email address
                            </label>
                            <div style={{
                                ...styles.inputWrap,
                                ...(focused === 'email' ? styles.inputWrapFocused : {})
                            }}>
                                <svg style={styles.inputIcon} viewBox="0 0 20 20" fill="none">
                                    <path d="M2.5 5.5A1.5 1.5 0 014 4h12a1.5 1.5 0 011.5 1.5v9A1.5 1.5 0 0116 16H4a1.5 1.5 0 01-1.5-1.5v-9z" stroke="currentColor" strokeWidth="1.2" />
                                    <path d="M2.5 6l7.5 5 7.5-5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                                </svg>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    onFocus={() => setFocused('email')}
                                    onBlur={() => setFocused(null)}
                                    placeholder="you@example.com"
                                    style={styles.input}
                                    required
                                />
                            </div>
                        </div>

                        <div style={styles.inputGroup}>
                            <div style={styles.labelRow}>
                                <label htmlFor="password" style={styles.label}>
                                    Password
                                </label>
                                <a href="#" style={styles.forgotLink}>Forgot?</a>
                            </div>
                            <div style={{
                                ...styles.inputWrap,
                                ...(focused === 'password' ? styles.inputWrapFocused : {})
                            }}>
                                <svg style={styles.inputIcon} viewBox="0 0 20 20" fill="none">
                                    <rect x="3" y="9" width="14" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.2" />
                                    <path d="M6.5 9V6.5a3.5 3.5 0 017 0V9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                                    <circle cx="10" cy="13.5" r="1" fill="currentColor" />
                                </svg>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    onFocus={() => setFocused('password')}
                                    onBlur={() => setFocused(null)}
                                    placeholder="••••••••"
                                    style={styles.input}
                                    required
                                />
                            </div>
                        </div>

                        <button type="submit" style={styles.submitBtn}>
                            <span>Sign In</span>
                            <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                                <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </form>

                    {/* Divider */}
                    <div style={styles.divider}>
                        <span style={styles.dividerLine} />
                        <span style={styles.dividerText}>or</span>
                        <span style={styles.dividerLine} />
                    </div>

                    {/* Register link */}
                    <p style={styles.registerText}>
                        Don't have an account?{' '}
                        <Link to="/register" style={styles.registerLink}>
                            Create one
                        </Link>
                    </p>
                </div>
            </div>
        </main>
    )
}

const styles = {
    main: {
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0c0c0c',
        fontFamily: "'DM Sans', 'Segoe UI', sans-serif",
        position: 'relative',
        overflow: 'hidden',
        padding: '1rem',
    },
    gridOverlay: {
        position: 'absolute',
        inset: 0,
        backgroundImage: `
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
        `,
        backgroundSize: '48px 48px',
        pointerEvents: 'none',
    },
    redGlow: {
        position: 'absolute',
        top: '-20%',
        right: '-10%',
        width: '520px',
        height: '520px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(200,30,30,0.12) 0%, transparent 70%)',
        pointerEvents: 'none',
    },
    card: {
        width: '100%',
        maxWidth: '420px',
        backgroundColor: '#161616',
        border: '1px solid #2a2a2a',
        borderRadius: '16px',
        overflow: 'hidden',
        position: 'relative',
        zIndex: 1,
        boxShadow: '0 32px 80px rgba(0,0,0,0.5)',
    },
    topBar: {
        height: '3px',
        background: 'linear-gradient(90deg, #c81e1e 0%, #e53e3e 50%, #c81e1e 100%)',
    },
    cardInner: {
        padding: '2.25rem 2rem 2rem',
    },
    header: {
        marginBottom: '2rem',
    },
    logoMark: {
        display: 'flex',
        gap: '4px',
        alignItems: 'flex-end',
        marginBottom: '1.25rem',
    },
    logoSquare: {
        display: 'block',
        width: '18px',
        height: '18px',
        backgroundColor: '#c81e1e',
        borderRadius: '3px',
    },
    logoSquareSm: {
        display: 'block',
        width: '10px',
        height: '10px',
        backgroundColor: '#4a4a4a',
        borderRadius: '2px',
        marginBottom: '1px',
    },
    title: {
        fontSize: '1.6rem',
        fontWeight: '700',
        color: '#f5f5f5',
        margin: '0 0 0.35rem',
        letterSpacing: '-0.02em',
    },
    subtitle: {
        fontSize: '0.875rem',
        color: '#6b6b6b',
        margin: 0,
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        gap: '1.25rem',
    },
    inputGroup: {
        display: 'flex',
        flexDirection: 'column',
        gap: '0.45rem',
    },
    labelRow: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    label: {
        fontSize: '0.8rem',
        fontWeight: '500',
        color: '#9a9a9a',
        textTransform: 'uppercase',
        letterSpacing: '0.06em',
    },
    forgotLink: {
        fontSize: '0.8rem',
        color: '#c81e1e',
        textDecoration: 'none',
    },
    inputWrap: {
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#1f1f1f',
        border: '1px solid #2e2e2e',
        borderRadius: '10px',
        padding: '0 14px',
        gap: '10px',
        transition: 'border-color 0.2s, box-shadow 0.2s',
    },
    inputWrapFocused: {
        borderColor: '#c81e1e',
        boxShadow: '0 0 0 3px rgba(200,30,30,0.12)',
    },
    inputIcon: {
        width: '17px',
        height: '17px',
        color: '#555',
        flexShrink: 0,
    },
    input: {
        flex: 1,
        backgroundColor: 'transparent',
        border: 'none',
        outline: 'none',
        color: '#e8e8e8',
        fontSize: '0.925rem',
        padding: '13px 0',
        fontFamily: 'inherit',
    },
    submitBtn: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8px',
        marginTop: '0.25rem',
        padding: '13px 20px',
        backgroundColor: '#c81e1e',
        color: '#fff',
        border: 'none',
        borderRadius: '10px',
        fontSize: '0.95rem',
        fontWeight: '600',
        fontFamily: 'inherit',
        cursor: 'pointer',
        letterSpacing: '0.01em',
        transition: 'background-color 0.2s, transform 0.1s',
    },
    divider: {
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        margin: '1.5rem 0 1.25rem',
    },
    dividerLine: {
        flex: 1,
        height: '1px',
        backgroundColor: '#2a2a2a',
    },
    dividerText: {
        fontSize: '0.75rem',
        color: '#444',
        textTransform: 'uppercase',
        letterSpacing: '0.08em',
    },
    registerText: {
        fontSize: '0.875rem',
        color: '#555',
        textAlign: 'center',
        margin: 0,
    },
    registerLink: {
        color: '#c81e1e',
        textDecoration: 'none',
        fontWeight: '500',
    },
    loader: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '14px',
    },
    loaderBar: {
        width: '180px',
        height: '2px',
        backgroundColor: '#2a2a2a',
        borderRadius: '2px',
        position: 'relative',
        overflow: 'hidden',
    },
    loaderText: {
        fontSize: '0.85rem',
        color: '#555',
        letterSpacing: '0.05em',
    },
}

export default Login