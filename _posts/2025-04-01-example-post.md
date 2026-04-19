---
layout: post
title: "An Example Blog Post with LaTeX and References"
date: 2025-04-01
tags:
  - machine learning
  - tutorial
abstract: "This post demonstrates the blog post format: LaTeX math, footnotes, a table of contents, and a reference list. It serves as a template for your own writing."
bibtex: |
  @misc{yourname2025example,
    title  = {An Example Blog Post with LaTeX and References},
    author = {Your Name},
    year   = {2025},
    url    = {https://yoursite.com/blog/2025/example-post/}
  }
---

## Introduction

This is an example blog post. It supports **Markdown**, $\LaTeX$ math, footnotes[^1], and automatic table of contents generation.

Display math works with double-dollar signs:

$$
\mathcal{L}(\theta) = \mathbb{E}_{q_\phi(z|x)}\left[\log p_\theta(x|z)\right] - D_{\mathrm{KL}}\!\left(q_\phi(z|x) \,\|\, p(z)\right)
$$

This is the evidence lower bound (ELBO) used in variational autoencoders [Kingma & Welling, 2013].

## Background

### Variational Inference

Variational inference turns posterior inference into an optimization problem [Blei et al., 2017]. Given observations $x$ and latent variables $z$, we seek to approximate the intractable posterior $p(z|x)$ with a tractable family $q_\phi(z|x)$.

The KL divergence between $q$ and $p$ satisfies:

$$
D_{\mathrm{KL}}(q \| p) = \mathbb{E}_q\left[\log \frac{q(z)}{p(z)}\right] \geq 0
$$

with equality if and only if $q = p$ almost everywhere[^2].

### Reparameterization Trick

To enable backpropagation through stochastic nodes, we write:

$$
z = \mu_\phi(x) + \sigma_\phi(x) \cdot \epsilon, \qquad \epsilon \sim \mathcal{N}(0, I)
$$

## Main Result

**Theorem 1** (ELBO Decomposition). *For any approximate posterior $q_\phi$,*

$$
\log p_\theta(x) \geq \mathcal{L}(\theta, \phi; x)
$$

*with equality when $q_\phi(z|x) = p_\theta(z|x)$.*

*Proof.* Apply Jensen's inequality to $\log p_\theta(x) = \log \int p_\theta(x,z)\,dz$. $\square$

## Conclusion

Blog posts support all standard Markdown features, display math, inline math like $\nabla_\theta \mathcal{L}$, code blocks, footnotes, and references.

```python
import torch

def elbo(model, x, n_samples=1):
    z, log_q = model.encode(x, n_samples)
    log_p = model.decode(x, z) + model.prior(z)
    return (log_p - log_q).mean()
```

---

## References

[^1]: This is a footnote. Click the arrow to return.
[^2]: This follows directly from the definition of KL divergence.

- Kingma, D. P., & Welling, M. (2013). *Auto-encoding variational Bayes*. arXiv:1312.6114.
- Blei, D. M., Kucukelbir, A., & McAuliffe, J. D. (2017). *Variational inference: A review for statisticians*. JASA.
