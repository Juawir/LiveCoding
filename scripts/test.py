def bisection_method(func, a, b, tol):
    print(f"{'Iterasi':<10}{'a':<10}{'b':<10}{'c':<10}{'f(a)':<10}{'f(c)':<10}{'Pengecekan':<15}{'Selang':<10}{'Galat':<10}")
    iter_count = 1
    while (b - a) / 2.0 > tol:
        c = (a + b) / 2.0
        fa = func(a)
        fc = func(c)
        
        print(f"{iter_count:<10}{a:<10.5f}{b:<10.5f}{c:<10.5f}{fa:<10.5f}{fc:<10.5f}{fa * fc:<15.8g}{'[a,c]' if fa * fc < 0 else '[c,b]':<10}{(b - a) / 2.0:<10.5f}")
        
        if fc == 0:
            return c
        elif fa * fc < 0:
            b = c
        else:
            a = c
        
        iter_count += 1
    
    c = (a + b) / 2.0
    print(f"{iter_count:<10}{a:<10.5f}{b:<10.5f}{c:<10.5f}{func(a):<10.5f}{func(c):<10.5f}{func(a) * func(c):<15.8g}{'[a,c]' if func(a) * func(c) < 0 else '[c,b]':<10}{(b - a) / 2.0:<10.5f}")
    return c

if __name__ == "__main__":
    # Definisikan fungsi yang akan dicari akarnya
    def f(x):
        return x**2 - 0.37

    # Tentukan interval awal dan toleransi
    a = 0
    b = 1
    tol = 1e-6

    root = bisection_method(f, a, b, tol)
    print(f"Akar ditemukan: {root}")
